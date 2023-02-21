const auth = fetch(
    "http://0.0.0.0/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=password&username=tester@test.com&password=test"
    }
  )

const result = auth.then((newResult) => newResult.json()).then((item) => console.log(item.access_token))