import Part from "./Part";

const Content = (props) => {
  const { parts, exercises } = props;

  const combined = parts.map((part, index) => ({
    part,
    exercise: exercises[index]
  }))

  return (
    <div>
      <Part name={combined[0].part} exercises={combined[0].exercise} />
      <Part name={combined[1].part} exercises={combined[1].exercise} />
      <Part name={combined[2].part} exercises={combined[2].exercise} />
    </div>
  )
}

export default Content
