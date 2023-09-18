// import { LChart, Line } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
    const data = [
        { id: 1, name: 'ssjoy', physics: 95, chemistry: 88, math: 92 },
        { id: 2, name: 'Sani', physics: 92, chemistry: 80, math: 88 },
        { id: 3, name: 'Sami', physics: 78, chemistry: 76, math: 89 },
        { id: 4, name: 'Ibnat', physics: 88, chemistry: 90, math: 91 },
        { id: 5, name: 'samsia rahman sami', physics: 56, chemistry: 85, math: 83 },
        { id: 6, name: 'Sawon', physics: 95, chemistry: 92, math: 87 },
        { id: 7, name: 'shohan', physics: 89, chemistry: 78, math: 85 },
        { id: 8, name: 'Shihab', physics: 35, chemistry: 88, math: 92 },
        { id: 9, name: 'Shova', physics: 83, chemistry: 75, math: 89 },
        { id: 10, name: 'Riya', physics: 47, chemistry: 84, math: 90 },
      ];
      


    return (
        <div>
       {/* <LChart width={500} height={400}data={MathData} >
<Line data="math"></Line>
       </LChart> */}

<div>
      <h2>Mathematics Marks Chart</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis  />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="physics" name="Physics Marks" stroke="blue" />
        <Line type="monotone" dataKey="chemistry" name="Chemistry Marks" stroke="green" />
        <Line type="monotone" dataKey="math" name="Math Marks" stroke="red" />
      </LineChart>
      
    </div>

        </div>
    );
};

export default Chart;