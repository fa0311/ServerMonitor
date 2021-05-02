var getData = async(fn,data) => {
    const param  = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({"query":data})
    };

    let json = await (await fetch("/../../api.json",param)).json();
    fn(json);
}