import { FunctionComponent } from "react";
import styles from './Person.module.css';

interface PersonProps {
  name: string;
  wave: Function;
}

const Person: FunctionComponent<PersonProps> = (props) => {
  const handleClick = () => {
    props.wave(props.name);
  };

  return (
    <>
      <h1 className={styles.title}>Hello from {props.name}</h1>
      <button onClick={handleClick}>Wave!</button>
    </>
  );
};

export default Person;
