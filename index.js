const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Node ecommerce ebooks",
            version: "1.0.0",
        }, 
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: [`${path.join(__dirname,"./controllers/*.js")}`],
};

const userRouter = require("./routes/userRoutes");
const bookRouter = require("./routes/bookRoutes");
const adminRouter = require("./routes/adminRoutes");

require("dotenv").config();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);
app.use("/api/admin", adminRouter);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.listen(process.env.PORT, () =>
  console.log("Listening to port " + process.env.PORT)
);
