// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationGenderDetails} = props
  return (
    <div className="vaccination-gender-container">
      <h1 className="heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="30%"
          data={vaccinationGenderDetails}
          innerRadius="30%"
          outerRadius="50%"
          startAngle={180}
          endAngle={0}
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
          fontFamily="roboto"
          fontSize="12"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
