export default function Home() {
  return (
    <div className="">
      <a
        className=""
        href="https://react.dev/learn/describing-the-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        React公式 Learn React
      </a>
      <p>に記載されているコードを実践してみる</p>

      <p>Describing the UI</p>
      <ul>
        <li>Your First Component</li>
        <li>Importing and Exporting Components</li>
        <li>Writing Markup with JSX</li>
        <li>JavaScript in JSX with Curly Braces</li>
        <li>Passing Props to a Component</li>
        <li>Conditional Rendering</li>
        <li>Rendering Lists</li>
        <li>Keeping Components Pure</li>
      </ul>

      <p>Adding Interactivity</p>
      <ul>
        <li>Responding to Events</li>
        <li>State: A Component's Memory</li>
        <li>Render and Commit</li>
        <li>State as a Snapshot</li>
        <li>Queueing a Series of State Updates</li>
        <li>Updating Objects in State</li>
        <li>Updating Arrays in State</li>
      </ul>

      <p>Managing State</p>
      <ul>
        <li>Reacting to Input with State</li>
        <li>Choosing the State Structure</li>
        <li>Sharing State Between Components</li>
        <li>Preserving and Resetting State</li>
        <li>Extracting State Logic into a Reducer</li>
        <li>Passing Data Deeply with Context</li>
        <li>Scaling Up with Reducer and Context</li>
      </ul>

      <p>Escape Hatches</p>
      <ul>
        <li>Referencing Values with Refs</li>
        <li>Manipulating the DOM with Refs</li>
        <li>Synchronizing with Effects</li>
        <li>You Might Not Need an Effect</li>
        <li>Lifecycle of Reactive Effects</li>
        <li>Separating Events from Effects</li>
        <li>Removing Effect Dependencies</li>
        <li>Reusing Logic with Custom Hooks</li>
      </ul>

    </div>
  )
}