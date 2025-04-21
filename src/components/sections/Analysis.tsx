
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Analysis = () => {
  // Sample data for charts
  const pieData = [
    { name: 'Quant', value: 65 },
    { name: 'Verbal', value: 35 },
  ];
  const COLORS = ['#0057FF', '#8B5CF6'];

  const barData = [
    { name: 'PS', score: 76 },
    { name: 'DS', score: 68 },
    { name: 'SC', score: 82 },
    { name: 'CR', score: 73 },
    { name: 'RC', score: 65 },
  ];

  return (
    <section id="analysis" className="section-container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Analysis To Maximize Efficiency</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our advanced analytics track your performance and identify patterns to help you focus your study time where it matters most.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2 glass-card p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6">Performance By Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          className="glass-card p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6">Study Focus Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3 glass-card p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gmat-blue mb-1">Study Efficiency</h4>
              <div className="text-3xl font-bold">83%</div>
              <p className="text-sm text-muted-foreground">Improvement from baseline</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gmat-purple mb-1">Time Management</h4>
              <div className="text-3xl font-bold">+26%</div>
              <p className="text-sm text-muted-foreground">Faster completion time</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gmat-green mb-1">Accuracy Rate</h4>
              <div className="text-3xl font-bold">92%</div>
              <p className="text-sm text-muted-foreground">On practiced questions</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gmat-orange mb-1">Projected Score</h4>
              <div className="text-3xl font-bold">720+</div>
              <p className="text-sm text-muted-foreground">Based on current progress</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analysis;
