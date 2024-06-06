import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", ()=> {
    test("should have a button", ()=> {
        render(<App />);

        expect(screen.getByRole("button")).toBeDefined();
    })
})