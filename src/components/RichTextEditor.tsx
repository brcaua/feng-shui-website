'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  Heading1, 
  Heading2, 
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify
} from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set initial content when component mounts or content changes from outside
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      // Only update if the editor is not focused (user is not typing)
      if (document.activeElement !== editorRef.current) {
        editorRef.current.innerHTML = content;
      }
    }
  }, [content]);

  const executeCommand = (command: string, value?: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand(command, false, value);
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editorRef.current) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        
        // Focus the editor first
        editorRef.current?.focus();
        
        // Create image element with proper styling
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.margin = '1rem 0';
        img.style.borderRadius = '0.5rem';
        img.alt = 'Imagem inserida';
        
        // Insert the image at cursor position
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(img);
          
          // Move cursor after image
          range.setStartAfter(img);
          range.setEndAfter(img);
          selection.removeAllRanges();
          selection.addRange(range);
        } else {
          // If no selection, append to end
          editorRef.current?.appendChild(img);
        }
        
        // Update content
        onChange(editorRef.current?.innerHTML || '');
      };
      reader.readAsDataURL(file);
    }
    
    // Reset file input
    e.target.value = '';
  };

  const insertLink = () => {
    const url = prompt('Digite a URL do link:');
    if (url) {
      executeCommand('createLink', url);
    }
  };

  const insertTable = () => {
    const rows = prompt('Número de linhas:', '3');
    const cols = prompt('Número de colunas:', '3');
    if (rows && cols) {
      let tableHTML = '<table border="1" style="border-collapse: collapse; width: 100%;">';
      for (let i = 0; i < parseInt(rows); i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < parseInt(cols); j++) {
          tableHTML += '<td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>';
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</table>';
      executeCommand('insertHTML', tableHTML);
    }
  };

  const ToolbarButton = ({ onClick, title, children, isActive = false }: {
    onClick: () => void;
    title: string;
    children: React.ReactNode;
    isActive?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 rounded hover:bg-gray-100 transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 p-2">
        <div className="flex flex-wrap gap-1">
          <ToolbarButton onClick={() => executeCommand('undo')} title="Desfazer">
            <Undo size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('redo')} title="Refazer">
            <Redo size={16} />
          </ToolbarButton>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton onClick={() => executeCommand('bold')} title="Negrito">
            <Bold size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('italic')} title="Itálico">
            <Italic size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('underline')} title="Sublinhado">
            <Underline size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('strikeThrough')} title="Riscado">
            <Strikethrough size={16} />
          </ToolbarButton>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton onClick={() => executeCommand('formatBlock', 'h1')} title="Título 1">
            <Heading1 size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('formatBlock', 'h2')} title="Título 2">
            <Heading2 size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('formatBlock', 'h3')} title="Título 3">
            <Heading3 size={16} />
          </ToolbarButton>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton onClick={() => executeCommand('justifyLeft')} title="Alinhar à esquerda">
            <AlignLeft size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('justifyCenter')} title="Centralizar">
            <AlignCenter size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('justifyRight')} title="Alinhar à direita">
            <AlignRight size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('justifyFull')} title="Justificar">
            <AlignJustify size={16} />
          </ToolbarButton>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton onClick={() => executeCommand('insertUnorderedList')} title="Lista com marcadores">
            <List size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('insertOrderedList')} title="Lista numerada">
            <ListOrdered size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => executeCommand('formatBlock', 'blockquote')} title="Citação">
            <Quote size={16} />
          </ToolbarButton>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton onClick={insertLink} title="Inserir link">
            <Link size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => fileInputRef.current?.click()} title="Inserir imagem">
            <Image size={16} aria-label="Inserir imagem" />
          </ToolbarButton>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton onClick={() => executeCommand('formatBlock', 'pre')} title="Código">
            <Code size={16} />
          </ToolbarButton>
          
          <button
            type="button"
            onClick={insertTable}
            title="Inserir tabela"
            className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-label="Tabela">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
              <line x1="15" y1="3" x2="15" y2="21"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="3" y1="15" x2="21" y2="15"/>
            </svg>
          </button>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <select
            onChange={(e) => executeCommand('fontName', e.target.value)}
            className="px-2 py-1 text-sm border border-gray-300 rounded"
            title="Fonte"
          >
            <option value="">Fonte</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
          </select>
          
          <select
            onChange={(e) => {
              if (e.target.value) {
                const size = e.target.value;
                editorRef.current?.focus();
                document.execCommand('styleWithCSS', false, 'true');
                document.execCommand('fontSize', false, '3'); // Reset to base
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  if (!range.collapsed) {
                    const span = document.createElement('span');
                    span.style.fontSize = size;
                    try {
                      range.surroundContents(span);
                    } catch {
                      span.appendChild(range.extractContents());
                      range.insertNode(span);
                    }
                    onChange(editorRef.current?.innerHTML || '');
                  }
                }
                e.target.value = '';
              }
            }}
            className="px-2 py-1 text-sm border border-gray-300 rounded ml-1"
            title="Tamanho da fonte"
          >
            <option value="">Tamanho</option>
            <option value="12px">Muito pequeno</option>
            <option value="14px">Pequeno</option>
            <option value="16px">Normal</option>
            <option value="18px">Médio</option>
            <option value="24px">Grande</option>
            <option value="32px">Muito grande</option>
            <option value="48px">Enorme</option>
          </select>
          
          <input
            type="color"
            onChange={(e) => {
              editorRef.current?.focus();
              document.execCommand('styleWithCSS', false, 'true');
              executeCommand('foreColor', e.target.value);
            }}
            className="w-8 h-8 border border-gray-300 rounded ml-1"
            title="Cor do texto"
          />
          
          <input
            type="color"
            onChange={(e) => {
              editorRef.current?.focus();
              document.execCommand('styleWithCSS', false, 'true');
              executeCommand('backColor', e.target.value);
            }}
            className="w-8 h-8 border border-gray-300 rounded ml-1"
            title="Cor de fundo"
          />
        </div>
      </div>
      
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="min-h-[400px] p-4 prose max-w-none focus:outline-none rich-text-editor"
        style={{ minHeight: isExpanded ? '600px' : '400px' }}
        data-placeholder={placeholder}
      />
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      
      <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-between items-center">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          {isExpanded ? 'Modo compacto' : 'Expandir editor'}
        </button>
        <div className="text-sm text-gray-500">
          Dica: Use Ctrl+Z para desfazer, Ctrl+Y para refazer
        </div>
      </div>
    </div>
  );
}