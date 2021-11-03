const userInfo = [
  {
    state: "Karnataka",
    city: "Bangalore"
  },
  {
    state: "Karnataka",
    city: "mangalore"
  },
  {
    state: "Karnataka",
    city: "Udupi"
  },
  {
    state: "Karnataka",
    city: "Udupi"
  },
  {
    state: "Maharastra",
    city: "Mumbai"
  },
  {
    state: "Maharastra",
    city: "Pune"
  },
  {
    state: "Karnataka",
    city: "Udupi"
  },
  {
    state: "Maharastra",
    city: "Mumbai"
  },
  {
    state: "Maharastra",
    city: "Lonavala"
  },
  {
    state: "Tamil Nadu",
    city: "Chennai"
  },
  {
    state: "Kerala",
    city: "Wayanad"
  },
  {
    state: "Maharastra",
    city: "Mumbai"
  }
];

const states = userInfo.reduce((acc, curr) => {
  const key = curr["state"];
  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(curr);
  return acc;
}, {});

console.log(states);
