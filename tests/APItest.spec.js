
const { test, expect } = require('@playwright/test');



//get request
test('GET API test', async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users/2", { timeout: 30000 });

    expect(response.status()).toBe(200);

    const body = await response.json();

    // full body, nicely formatted
    console.log(JSON.stringify(body, null, 2));

    expect(body.data.id).toBe(2);
    expect(body.data.first_name).toBe("Janet");
});

//POST Request
test('POST API test', async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users", {
        headers: { 'Content-Type': 'application/json' },
        data: { name: "morpheus", job: "leader" },
        timeout: 30000
    });

    console.log('Status:', response.status());

    const body = await response.json();
    console.log(JSON.stringify(body, null, 2));

    expect(response.status()).toBe(201);
    expect(body.name).toBe("morpheus");
    expect(body.job).toBe("leader");
    expect(body.id).toBeDefined();
    expect(body.createdAt).toBeDefined();
});


//PUT request
test('PUT API test', async ({ request }) => {

    const response = await request.put("https://reqres.in/api/users/2", {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: "morpheus",
            job: "zion resident"
        },
        timeout: 30000
    });

    console.log('Status:', response.status());

    const body = await response.json();
    console.log(JSON.stringify(body, null, 2));

    expect(response.status()).toBe(200);
    expect(body.name).toBe("morpheus");
    expect(body.job).toBe("zion resident");
    expect(body.updatedAt).toBeDefined();
});


//Delete request 
test('DELETE API test', async ({ request }) => {

    const response = await request.delete("https://reqres.in/api/users/2", {
        timeout: 30000
    });

    console.log('Status:', response.status());
    console.log('Body:', await response.text());

    expect(response.status()).toBe(204);
});