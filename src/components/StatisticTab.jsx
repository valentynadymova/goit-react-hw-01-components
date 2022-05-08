import PropTypes from 'prop-types';
import {StatTab, StatList, StatItem} from './StatisticTab.styled';

function StatisticTab ({title, stats}){
    return (
    <StatTab>
        {title && <h2>{title}</h2>}

  <StatList>
      {stats.map(stat=>(
    <StatItem key={stat.id}>
      <span >{stat.label}</span>
      <span >{stat.percentage}</span>
    </StatItem>))}
  </StatList>
</StatTab>
    )
};

export default StatisticTab

StatisticTab.propTypes={
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired
        }))
}
