const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
const INTERVAL = 30 * 60 * 1000 //CONVERT INTO MS 
const getbinningTimeStamp = (timestamp) => {
    const date = new Date(timestamp)
    console.log("before", date);
    const flooredDate = Math.floor(date.getTime()/ INTERVAL) * INTERVAL;
    console.log("after", flooredDate);
    return new Date(flooredDate).toISOString()
}

const binnedDate = events.reduce((acc, event) => {
    const bin = getbinningTimeStamp(event.timestamp)
    if(!acc[bin]){
        acc[bin] = {total: 0};
    }
    acc[bin].total = acc[bin].total + 1
    return acc;
}, {})
getbinningTimeStamp('2025-10-22T11:02:00Z')
console.log(binnedDate);