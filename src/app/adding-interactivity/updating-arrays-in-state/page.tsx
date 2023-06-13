//https://react.dev/learn/updating-arrays-in-state#challenges
//https://react.dev/learn/updating-arrays-in-state
import Link from 'next/link'
import Example01 from './example01'
import Example0201 from './example0201'
import Example0202 from './example0202'
import Example03 from './example03'
import Example04 from './example04'
import Example05 from './example05'
//import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/updating-arrays-in-state"
          target="_blank"
          rel="noopener noreferrer"
        >
          例
        </a>
      </h2>
      <h3>Example01</h3>
      <Example01 />
      <h3>Example0201</h3>
      <Example0201 />
      <h3>Example0202</h3>
      <Example0202 />
      <h3>Example03</h3>
      <Example03 />
      <h3>Example04</h3>
      <Example04 />
      <h3>Example05</h3>
      <Example05 />
      <h2>
        <a
          className=""
          href="https://react.dev/learn/updating-arrays-in-state#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
    </div>
  )
}