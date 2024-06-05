export const CaesarDecipher = (text: string, shift: number) => {
    let decryptedName = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        let limit = char === char.toLowerCase() ? 97 : 65;
        char = String.fromCharCode(((code - limit - shift + 26) % 26) + limit);
      }
      decryptedName += char;
    }
    return decryptedName;
  }