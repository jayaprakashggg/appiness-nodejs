module.exports = {
  secretKey: "s1n2a3p4t5w6e7e8t9",
  image_url_local: "./server/uploads",
  development: {
    ip: "192.168.1.2",
    port: 4000,
    database: {
      host: "localhost",
      port: 27017,
      protocol: "mongodb",
      user: "",
      password: "",
      database: "appiness",
      connectionLimit: 100,
    },
  },
  production: {
    ip: "192.168.1.2",
    port: 4001,
    database: {
      host: "localhost",
      port: 27017,
      protocol: "mongodb",
      user: "",
      password: "",
      database: "appiness",
      connectionLimit: 100,
    },
  },
};
