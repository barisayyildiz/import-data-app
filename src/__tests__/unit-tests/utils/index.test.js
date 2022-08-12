import { sizeFormatter } from "../../../utils";

test("size formatter works correctly", () => {
  expect(sizeFormatter(100)).toBe("100 B");
  expect(sizeFormatter(256.24)).toBe("256.24 B");
  expect(sizeFormatter(1568)).toBe("1.53 KB");
  expect(sizeFormatter(1048576)).toBe("1 MB");
  expect(sizeFormatter(3512729.6)).toBe("3.35 MB");
  expect(sizeFormatter(1073741824)).toBe("1 GB");
});
