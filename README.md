# compose-typed
_A very small library for a set of compose functions that are flow-typed_

## API
### compose2
```javascript
import { compose2 } from 'compose-typed'

const addTen = (x: number) => x + 10;
const addFive = (x: number) => x + 5;

const addFifteen = compose2(addFive, addTen);
```
Composes two functions together. Generically typed using flow.

#### Parameters
Accepts two functions, where the output of the first function is
the input of the second.
```
  (
    func1: (i: X) => Y,
    func2: (i: Y) => Z,
  )
```
- **fun1** ((i: InputType): IntermediateType)
- **fun2** ((i: IntermediateType): OutputType)
#### Output
Returns a function that takes the type of the first argument's input,
and return the type of the second's output.
```
compose(
  (i: X) => Y,
  (i: Y) => Z,
): X => Z
```
### compose(n)
This api also exposes `compose3` and `compose4`, with identical functionality but accepting of more arguments to pass through.

```javascript
import { compose3, compose4 } from 'compose-typed'

const addFive = x => x + 5;
const addTen = x => x + 10;
const addTwenty = x => x + 20;

const addThirtyFive = compose3(addFive, addTen, addTwenty);

const speakString = x => `The Number is: ${x}`;
const convertToString = x => x.toString();

const addThirtyFiveAndSpeak = compose4(
  addThirtyFive,
  convertToString,
  speakString,
  console.log,
);

addThirtyFiveAndSpeak(5); // 'The Number is: 40'
```