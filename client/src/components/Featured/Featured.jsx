import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './featured.scss';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={70} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$450</p>
        <p className="desc">
          previous transaction processing. Last payment may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount"> 412.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount"> 412.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount"> 412.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
