import React from "react"
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import Atmshop from '../shop'
import App from '../../App'
import '@testing-library/jest-dom/extend-expect';
import About from "../about";
import Errorpage from "../404";

test('Having a text', () => {
    render(<Atmshop url="/shop" />)
    expect(screen.getByText('Bitcoin ATM shop')).toBeInTheDocument()
});

test("current user is active in Shop", () => {
    render(
      <MemoryRouter initialEntries={["./shop"]}>
        <Atmshop/>
      </MemoryRouter>
    );
  });
  test("current user is active in About", () => {
    render(
      <MemoryRouter initialEntries={["./about"]}>
        <About/>
      </MemoryRouter>
    );
 });
 test("current user is active in 404", () => {
  render(
    <MemoryRouter initialEntries={["./404"]}>
      <Errorpage/>
    </MemoryRouter>
  );
});