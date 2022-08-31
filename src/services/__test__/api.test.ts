import {get} from "src/services/api";
import axios from "axios";
import {testingAccountData} from "src/testingData";
import {apiPath} from "src/const"

jest.mock("axios");
const mockAxiosGet = axios.get as jest.MockedFn<typeof axios.get>;

it("axios called with right parametere", async () => {
  await get(apiPath as string);
  expect(mockAxiosGet).toBeCalledWith(apiPath);
  expect(mockAxiosGet).toBeCalledTimes(1);
});

it("axios get data, then return data", async () => {
  mockAxiosGet.mockResolvedValue({status:200, data:testingAccountData});
  const response = await get(apiPath as string);
  expect(response).toBe(testingAccountData.data);
});

it("axios show error, then return error", async () => {
  mockAxiosGet.mockRejectedValue(new Error("server error"));
  try {
    await get(apiPath as string);
  } catch (error) {
    expect(error).toBeTruthy();
  }
});
