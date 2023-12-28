export interface Annotation {
  text: string;
  label: string;
  start: number;
  end: number;
}
export interface Chunk {
  type: string;
  label?: string;
  text: string;
  start?: number;
  end?: number;
}

export interface Label {
  id: string;
  label?:string;
}
