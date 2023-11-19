interface TruncateStringProps{
    str: string;
    maxLength: number;
}

export function TruncateString({str, maxLength}: TruncateStringProps) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  }