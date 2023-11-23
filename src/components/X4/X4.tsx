import Navbar from "../Navbar";
import styles from "./X4.module.scss";
import { Container, MenuItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const currencies = [
  {
    value: "-",
    label: "-",
  },
  {
    value: "+",
    label: "+",
  },
];
function X4() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const [operator1, setOperator1] = useState("+");

  const [operator2, setOperator2] = useState("+");
  const [operator3, setOperator3] = useState("-");
  const discreminant = `${
    Math.pow(b, 2) -
    4 * (operator1 === "+" ? a : -a) * (operator3 === "+" ? c : -c)
  }`;
  const discreminantSqrt = Math.sqrt(Number(discreminant)).toFixed(2);
  const x1 = `${(
    ((operator2 === "+" ? -b : +b) + Number(discreminantSqrt)) /
    (2 * a)
  ).toFixed(3)}`;
  const x2 = `${(
    ((operator2 === "+" ? -b : +b) - Number(discreminantSqrt)) /
    (2 * a)
  ).toFixed(3)}`;
  return (
    <>
      <Navbar />
      <div>
        <Container maxWidth="md">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Quadratic equations
              </Typography>
              <Typography variant="h5" component="div">
                <div className="equation">
                  <div className={styles.equationsItem}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={operator1}
                      onChange={(e) => setOperator1(e.target.value)}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      className={styles.equation}
                      id="outlined-basic"
                      variant="outlined"
                      value={a}
                      onChange={(e) => setA(Number(e.target.value))}
                    />
                    <div>
                      t<sup>4</sup>
                    </div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={operator2}
                      onChange={(e) => setOperator2(e.target.value)}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      className={styles.equation}
                      id="outlined-basic"
                      variant="outlined"
                      value={b}
                      onChange={(e) => setB(Number(e.target.value))}
                    />
                    <div>
                      t <sup>2</sup>
                    </div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={operator3}
                      onChange={(e) => setOperator3(e.target.value)}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      className={styles.equation}
                      id="outlined-basic"
                      variant="outlined"
                      value={c}
                      onChange={(e) => setC(Number(e.target.value))}
                    />
                    <div>= 0</div>
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Result
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {operator1}
                {a}t <sup>4</sup>
                {operator2}
                {b}t<sup>2</sup>
                {operator3}
                {c} = 0
              </Typography>
              <hr />
              <Typography variant="h4">
                x = t <sup>2</sup>
              </Typography>
              <hr />
              <Typography variant="h4" component="div">
                {operator1}
                {a}x <sup>2</sup>
                {operator2}
                {b}x{operator3}
                {c} = 0
              </Typography>
              <hr />
              <Typography variant="h4" component="div">
                <div className={styles.itemsABC}>
                  <div>
                    a = {operator1}
                    {a},
                  </div>{" "}
                  <div>
                    b = {operator2}
                    {b},
                  </div>
                  <div>
                    c = {operator3}
                    {c}
                  </div>
                </div>
              </Typography>
              <hr />
              <Typography variant="h4">
                D = b <sup>2</sup> - 4ac
                <br />D = {operator1} {Math.pow(b, 2)} - 4*({operator1}
                {a})*({operator3}
                {c})
                <br />D = {discreminant};
                {Number(discreminant) >= 0 ? (
                  <>
                    &#8730;{discreminant} ={discreminantSqrt}
                  </>
                ) : (
                  ""
                )}
              </Typography>
              <hr />
              {Number(discreminant) >= 0 ? (
                <>
                  <Typography variant="h4">
                    <div className={styles.x1Equation}>
                      <div className={styles.xTable}>
                        <div>
                          x <sub>1</sub> ={" "}
                        </div>
                        <table>
                          <tbody>
                            <tr>
                              <td>-b + &#8730;D</td>
                            </tr>
                            <tr>
                              <td>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td>2a</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      ;
                      <div className={styles.xTable}>
                        <div>
                          x <sub>1</sub> ={" "}
                        </div>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                {operator2 === "+" ? -b : +b} +{" "}
                                {discreminantSqrt}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td>{2 * a}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      ;
                      <div className={styles.xTable}>
                        <div>
                          x <sub>1</sub> = {x1}
                        </div>
                      </div>
                    </div>
                  </Typography>
                  <hr />
                  <Typography variant="h4">
                    <div className={styles.x1Equation}>
                      <div className={styles.xTable}>
                        <div>
                          x <sub>2</sub> ={" "}
                        </div>
                        <table>
                          <tbody>
                            <tr>
                              <td>-b - &#8730;D</td>
                            </tr>
                            <tr>
                              <td>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td>2a</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      ;
                      <div className={styles.xTable}>
                        <div>
                          x <sub>2</sub> ={" "}
                        </div>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                {operator2 === "+" ? -b : +b} -{" "}
                                {discreminantSqrt}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td>{2 * a}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      ;
                      <div className={styles.xTable}>
                        <div>
                          x <sub>2</sub> = {x2}
                        </div>
                      </div>
                    </div>
                  </Typography>
                  <hr />
                  {x1 !== x2 ? (
                    <Typography variant="h4">
                      <div>
                        x <sub>1</sub> = {x1}
                      </div>
                      <div>
                        x <sub>2</sub> = {x2}
                      </div>
                    </Typography>
                  ) : (
                    <Typography variant="h4">
                      <div>
                        x <sub>1,2</sub> = {x1}
                      </div>
                    </Typography>
                  )}
                  <hr />
                  <Typography variant="h3">Answer:</Typography>
                  {x1 !== x2 ? (
                    <Typography variant="h3">
                      <div>
                        <div>
                          t <sub>1</sub> = x <sub>1</sub> <sup>2</sup> ={" "}
                          {Math.pow(Number(x1), 2)}
                        </div>
                      </div>
                      <div>
                        t <sub>2</sub> = x <sub>2</sub> <sup>2</sup> ={" "}
                        {Math.pow(Number(x2), 2)}
                      </div>
                    </Typography>
                  ) : (
                    <Typography variant="h3">
                      <div>
                        t <sub>1,2</sub> = x <sub>1,2</sub> <sup>2</sup> ={" "}
                        {Math.pow(Number(x1), 2)}
                      </div>
                    </Typography>
                  )}
                </>
              ) : (
                <Typography variant="h4">
                  Undecidable, D cannot be less than 0
                </Typography>
              )}
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default X4;
