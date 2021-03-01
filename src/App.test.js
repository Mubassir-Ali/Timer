import { shallow } from "./enzyme";
import App from "./App";

describe("App", () => {
  it("should render a <div/>", () => {
    const wraper = shallow(<App/>);
    expect(wraper.find('div').length).toEqual(1)  
  });

  it("should render a timer",()=>{
    const wraper = shallow(<App/>);
    expect(wraper.find('Timer').length).toEqual(1)
  })
});


