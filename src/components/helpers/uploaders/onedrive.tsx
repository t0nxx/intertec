import React from "react";
import { Image } from "react-bootstrap";
import { GraphFileBrowser } from "@microsoft/file-browser";
import oneDrive from "../../../assets/cloud.png";

// this should be moved to constant file , i'll use my own access token for tseting now.
const access_token ="EwBwA8l6BAAU6k7+XVQzkGyMv7VHB/h4cHbJYRAAAYQZRCjMzqES3oVkbBQhNznINDK/Ev3ZMhvYdu9oAAlfVppWZdDbgvsBjoeB9p/B8RTOcru2wtRbq/8V4UjY+b7fe0dpwrrB8wFsRF5sFjQ0pvUrTuI0lafjtdue2TgUudMV57cLMDzxGykrcY86GutIlEeKbzLaJetV8BNtlmH8tZZ6wBn9N3F76t5h5UCenb9tOes3W8INohuh0VMlDWRxx1Smxy62UJu3MHgGjKo6ohr1dSKry7mmyXmW+NsxO11SlCG6pY5Z+TJ073KP2qd+L25BNW0T7OOT/MpHdvKFoiiS5uXhJ608C8vfZ5wj6GvKnqWyvdDmEs1cLtix+KgDZgAACLGZjbQv+goWQALdTWi2XKNKM0ek5bgDU8SOZYEuN6rT83vOmWdJh1HyN/vtpNIvxxYISJFcigh3UYue52tZmC42OzW55qctlWV3euxIo/o9clhlRziK3FGZ+kxrlVuXYgUEEi2vpvylVdZnVikce08T7oxN6V3Kt93ibLcOVLTLOzGTirbWRJCi4xrcqixHy8VLX0bXqBPe51bW8gnHsbzx/T3UK6c+RYeA67m/AOhnV51pGNegrdpvrU+XXGwulfHmqH2x+ObmZuZm1sustMiC/Nh+iTnPqe/ciYgUIm1PjKexSnzs0d2GyJnJMrN/kQW2DtxD5eu9Z0o4ftpczwdXPvr3wBH1hHS40oTATCm8UWrHbM6nzEI8TsCl0IAEuaP5mXz5gItqIb1ImSbVi7wUKRe7h5Wd3o/Or6Fq/0qvkv0xXiBeZJg50q4Gu6+mSfK/4A7PeoKpDDDdxKoOYinowTlPwnuDCkz5iH8FuuL+cObuYQoUJvmxW2OaBRZMSXxyFfvKXXtfphaa/J0mXWZSri392bXErP3fR7HtO+Rb9CyT2KjHuARP8z7KMeeIaGkB0vcze0SGfDozjFOcsb975wtNJBxawh6nFrn2T6jHmwtzZlYAUkN9nx3JvCnyhefqoKyHLPb8hSbVp+/zX5k9/vch1TOM0U3ovpcwAL2EQy7Q7inRrSO2hGzAHR5vxDfKZi7q1nZ1l7wgsAeSMQ5uOvnA9gUgCQjns8G8i0wbuvB0gKeU/dN/PeDVgxroAE5g9q2OYVWO1fSEAg==";
// @ts-ignore
const OneDriveChooserComponent = (props) => {
  const onSuccess = (files) => {
    console.log(files);
    // props.onChange(files);
  };
  return (
    <GraphFileBrowser
      getAuthenticationToken={() => Promise.resolve(access_token)}
      onSuccess={onSuccess}
    />
  );
};

export default OneDriveChooserComponent;
