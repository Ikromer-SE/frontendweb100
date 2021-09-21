describe('some function stuff', () => {

  describe('higher order functions', () => {

    it('procedural', () => {
      // <tag>content</tag>

      function tagMaker(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`;
      }

      expect(tagMaker('h1', 'Hello')).toBe('<h1>Hello</h1>');
      expect(tagMaker('h1', 'Goodbye')).toBe('<h1>Goodbye</h1>');
      expect(tagMaker('p', 'message')).toBe('<p>message</p>');
    });
    it('object-oriented way', () => {

      class TagMaker {

        constructor(private tag: string) { }

        make(content: string): string {
          return `<${this.tag}>${content}</${this.tag}>`;
        }
      }

      const h1Maker = new TagMaker('h1');
      const pMaker = new TagMaker('p');

      expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker.make('Goodbye')).toBe('<h1>Goodbye</h1>');
      expect(h1Maker.make('Tacos!')).toBe('<h1>Tacos!</h1>');
      expect(pMaker.make('Message')).toBe('<p>Message</p>');
    });

    it('higher order function', () => {
      const tagMaker = (tag: string) => (content: string) => `<${tag}>${content}</${tag}>`;

      const h1Maker = tagMaker('h1'); // "closures"
      const pMaker = tagMaker('p');


      expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker('Goodbye')).toBe('<h1>Goodbye</h1>');
      expect(h1Maker('Tacos!')).toBe('<h1>Tacos!</h1>');
      expect(pMaker('Message')).toBe('<p>Message</p>');
    });
  });
});
