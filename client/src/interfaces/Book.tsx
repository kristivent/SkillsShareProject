export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publisher?: string;
      imageLinks?: {
        thumbnail?: string;
      };
    };
    accessInfo?: {
      pdf?: {
        acsTokenLink?: string;
      };
    };
  }