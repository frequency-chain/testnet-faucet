import { Captcha } from "./Captcha";

describe("HCaptcha", () => {
  it("Validates captcha positively", async () => {
    const validTestSecretKey = "0x0000000000000000000000000000000000000000";
    const validTestResponseToken = "10000000-aaaa-bbbb-cccc-000000000001";
    const recaptcha = new Captcha(validTestSecretKey);
    const result = await recaptcha.validate(validTestResponseToken);
    expect(result).toBeTruthy();
  });

  it("Validates captcha negatively", async () => {
    const badSecretKey = "AAAAAAAAAAAAAAA-AAAAAAAAAAAAAAAAAAAAAAAA";
    const recaptcha = new Captcha(badSecretKey);
    const result = await recaptcha.validate("doesnt matter");
    expect(result).toBeFalsy();
  });
});
