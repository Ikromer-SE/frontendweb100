describe('immutability primer', () => {

  describe('objects', () => {
    it('counter example: this is mutation - don\'t do this', () => {
      const movie = {
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1978
      };

      movie.yearReleased = 1977;
      expect(movie.yearReleased).toBe(1977);

    });

    it('changing year released in an immutable way', () => {

      interface Movie {
        title: string;
        director: string;
        yearReleased: number;
        studio?: string;
      };
      const movie: Movie = {
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1978
      };

      // object spread operator - copy all the properties from movie, but overwrite yearReleased with this new value.
      const movie2 = { ...movie, yearReleased: 1977 };


      expect(movie2.yearReleased).toBe(1977);
      expect(movie2.director).toBe('Lucas');
    });

    it('creating a dictionary', () => {

      interface Dictionary<T> {
        [key: string]: T
      }

      // interface FriendDictionary {
      //   [key: string]: string
      // }
      const friends: Dictionary<string> = {
        "sean": "555-1212",
        "billy": "328-1212",
        "jenny": "867-5309"
      };

      expect(friends["billy"]).toBe("328-1212");

      friends["david"] = "333-1212";
      expect(friends["david"]).toBe("333-1212");


      interface Movie {
        title: string;
        director: string;
        yearReleased: number;
        studio?: string;
      };

      const movies: Dictionary<Movie> = {
        'jaws': { title: 'Jaws', director: 'Spielberg', yearReleased: 1977 }
      }
      expect(movies['jaws'].director).toBe('Spielberg');

      const newMovies = { ...movies, 'et': { title: 'ET', director: 'Spielberg', yearReleased: 1983 } };

      expect(newMovies['et'].yearReleased).toBe(1983);
      // expect(newMovies['jaws']?.yearReleased).toBe(1977); // TODO: Is this a Angular 12 thing?

      const empire: Movie = {
        title: 'The Empire Strikes Back',
        director: 'Kershner',
        yearReleased: 1980,
        studio: '20th Century Fox'
      };

      expect(empire.studio).toEqual('20th Century Fox');
      interface WorkLog {
        for: string;
        tasks?: {
          job: string;
          completed: boolean;
        };
      }
      const log: WorkLog = {
        for: 'Jeff',
        tasks: {
          job: 'Clean Office',
          completed: false
        }
      };

      expect(log.tasks?.job).toEqual('Clean Office');
    });
  });

  describe('immutable array stuff', () => {

    it('adding items to an array', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const newNumbers = [0, ...numbers, 10];

      expect(newNumbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('sorting an array immutable', () => {
      const family = ['Zeke', 'Carl', 'Abigail', 'Paul'];

      const newFamily = [...family.sort()]; // you create a new array out of the sorted array.

      expect(newFamily).toEqual(['Abigail', 'Carl', 'Paul', 'Zeke'])

    });

  });
});
