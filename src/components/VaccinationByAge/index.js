// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div className="container">
      <h1 className="heading">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie data={vaccinationByAgeDetails} outerRadius="60%" dataKey="count">
          <Cell name="18-44" fill=" #2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          verticalAlign="middle"
          layout="vertical"
          align="right"
          fontFamily="roboto"
          fontSize="12"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
