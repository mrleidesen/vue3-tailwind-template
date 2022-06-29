import { expect, test } from "vitest";
// import { render, screen } from "@testing-library/vue";
import HomePage from "./HomePage.vue";
import { mount } from "@vue/test-utils";

// If you want using @testing-library
// test("displays message", async () => {
//   render(HomePage);

//   // Assert the rendered text of the component
//   const view = await screen.findByText("0");

//   expect(view.className).toBe("count");
// });

test("should show text", () => {
  const wrapper = mount(HomePage);

  const view = wrapper.find(".count");

  expect(view.text()).toBe("0");
});
