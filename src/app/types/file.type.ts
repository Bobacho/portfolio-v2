export interface File {
  nombre: string;
  type?: string;
  uri: string;
  icon?: string;
  mime?: 'pdf' | 'html' | 'doom'
  src?: string;
  error?: boolean
}




export interface Folder extends File {
  files?: File[]
}
