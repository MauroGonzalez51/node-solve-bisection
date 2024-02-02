type Data =
    | { a: number; b: number }
    | {
          a: number;
          b: number;
          x: number;
          sign: {
              a: number;
              b: number;
              x: number;
          };
          eval: {
              a: number;
              b: number;
              x: number;
          };
          currentError: number;
      };

export { type Data };
