//https://react.dev/learn/choosing-the-state-structure#challenges
//https://react.dev/learn/choosing-the-state-structure
import Link from 'next/link'
import Example01 from './example01'
import Example02 from './example02'
import Example03 from './example03'
import Example04 from './example04'
//import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/choosing-the-state-structure"
          target="_blank"
          rel="noopener noreferrer"
        >
          例
        </a>
      </h2>
      <h3>Example01</h3>
      <Example01 />
      <h3>Example02</h3>
      <Example02 />
      <h3>Example03</h3>
      <Example03 />
      <h3>Example04</h3>
      <Example04 />
      <h2>
        <a
          className=""
          href="https://react.dev/learn/reacting-to-input-with-state#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
    </div>
  )
}