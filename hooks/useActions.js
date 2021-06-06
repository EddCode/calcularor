import {useState} from 'react';

const useActions = props => {
  const {op} = props;

  const [prev, setPrev] = useState('0');
  const [number, setNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const clearResult = () => {
    setNumber('0');
    setPrev('0');
  };

  const makeOperation = desision => {
    const madeOperation =
      prev !== '0'
        ? op[desision](parseFloat(prev), parseFloat(number))
        : number;

    setOperation(desision);
    setPrev(madeOperation);
    setNumber('0');
  };

  const addNumber = num => {
    if (number && number.includes('.') && num === '.') {
      return;
    }

    setNumber(last => {
      if (last === '0') {
        return `${num}`;
      }

      return `${last}${num}`;
    });
  };

  const handleDelition = () => {
    const sizeNumber = number.length;

    if (sizeNumber === 1 || (number.includes('-') && sizeNumber === 2)) {
      return setNumber('0');
    }

    const removed = number.substr(0, sizeNumber - 1);
    setNumber(removed);
  };

  const setPositiveNegative = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber(`-${number}`);
  };

  const getResult = () => {
    const a = parseFloat(prev);
    const b = parseFloat(number);

    const result = op[operation](a, b);

    setPrev('0');
    setNumber(`${result}`);
  };

  return {
    clearResult,
    makeOperation,
    addNumber,
    handleDelition,
    setPositiveNegative,
    getResult,
    prev,
    number,
  };
};

export default useActions;
