export function renderWithLinks(text: string) {
  return text.split(/(\{\{email\}\}|\{\{phone\}\})/g).map((part, i) => {
    if (part === "{{email}}") {
      return (
        <a key={i} href="mailto:iva.creolab@gmail.com">
          iva.creolab@gmail.com
        </a>
      );
    }
    if (part === "{{phone}}") {
      return (
        <a key={i} href="tel:+385919798969">
          +385 91 979 8969
        </a>
      );
    }
    return part;
  });
}
