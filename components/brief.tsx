import { Fragment } from "react"

export default function Brief() {
  return (
    <Fragment>
      <article>
        <h3 className="text-2xl font-bold text-primary pt-11">
          What are the major features of React?
        </h3>
        <small>25/2/2022</small>
        <p>
          It uses VirtualDOM instead of RealDOM considering that RealDOM
          manipulations are expensive.
        </p>
      </article>
      <article>
        <h3 className="text-2xl font-bold text-primary pt-11">
          What is the difference between Element and Component?
        </h3>
        <small>25/2/2022</small>
        <p>
          An Element is a plain object describing what you want to appear on the
          screen in terms of the DOM nodes or other components. Elements can
          contain other Elements in their props. Creating a React element is
          cheap. Once an element is created, it is never mutated.
        </p>
      </article>
    </Fragment>
  )
}
