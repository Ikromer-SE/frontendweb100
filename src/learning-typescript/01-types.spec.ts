describe('Data types and variables and constants in Typescript', () => {

  describe('Declaring variables', () => {
    it('should be implicitly typed variables', () => {
      let x; // x is any type and can change types when assigned new values
      x = 32;
      expect(typeof (x)).toBe('number');

      x = 'Tacos'
      expect(typeof (x)).toBe('string');

      let y = 'George' // initializing with an implicit type
      // y = 44; is invalid since y is implicity a string

      expect(typeof (y)).toBe('string')

    });

    it('should be explicity typed variables', () => {
      let x: number;
      x = 12;
      //x = 'Cat'; is invalid since x is explicitly typed

      let y: string | number; // union type: can be either one of these two types but no other types

      y = 12
      expect(typeof (y)).toBe('number');

      y = 'Cat'
      expect(typeof (y)).toBe('string');
    });

    it('should be a constant', () => {
      const PI = 3.1415;

      expect(PI).toBe(3.1415);      //toBe does not work on objects. Need to use toEqual
      expect(PI).not.toBe(3.1416);

      const dune = {
        title: 'Dune',
        actors: ['Zendaya', 'Timothy Csomething']
      };

      expect(dune.title).toBe('Dune');
      expect(dune.actors[0]).toBe('Zendaya');

      dune.actors[1] = 'Timothy Chalamet';

      expect(dune).toEqual({  //Need to use toEqual on objects
        title: 'Dune',
        actors: ['Zendaya', 'Timothy Chalamet']
      });
    });

  });

  describe('Typescript literals', () => {
    it('should be a string literal', () => {
      let name = 'Izaak';
      let name2 = "Izaak";
      let name3 = `Izaak`;  //backticks for string allow you to use new lines in string initialization

      expect(name).toBe(name2);
      expect(name2).toBe(name3);

      let story = `Chapter 1

      This is the power of backticks`;  //backticks for string allow you to use new lines in string initialization

      let htmlBlock = `<div>
                       <h1>Tacos</h1>
                       </div>`;

      const user = 'Bob';
      const job = 'Developer';
      const pay = 120000;

      //const message = 'The user name is ' + user + ' and they are a ' + job + ' And get paid ' + pay + ' A year';
      const message = `The user name is ${user} and they are a ${job} And get paid ${pay} A year`;

      expect(message).toBe('The user name is Bob and they are a Developer And get paid 120000 A year');
    });

    it('should be number literals', () => {
      let n1: number = 10;
      let n2: number = 10.5;
      let n3: number = 0xff; // Base 16 Hex numbers
      let n4: number = 0b101010;
      let n5: number = 0o644; // Base 8 - Octal

      let n6: number = 180_000;

      expect(n6).toBe(180000);


    });

    it('has array literals', () => {
      // let favoriteNumbers: (string | number)[];
      let favoriteNumbers: Array<string | number>;

      favoriteNumbers = [1, 8, 9, 108, 'Dog'];

      favoriteNumbers[0] = 'Three';

      let bools: boolean[];

      // let fn: (string | number)[];

    });

    it('function literals');
    it('object literals');
  });
});
