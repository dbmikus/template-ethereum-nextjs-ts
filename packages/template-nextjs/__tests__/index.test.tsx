import React from "react"
import { cleanup, render } from "@testing-library/react"
import Home from "../pages/index"

afterEach(() => {
    // unmount all components rendered with `render`
    cleanup()
})

test("Fake sample test", () => {
    render(<Home />)
})
