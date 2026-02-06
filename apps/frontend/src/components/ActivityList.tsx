type Activity = {
    id: number;
    text: string;
    time: string;
  };
  
  const mockActivity: Activity[] = [
    { id: 1, text: 'Analytics service healthy', time: '2 mins ago' },
    { id: 2, text: 'Backend proxy connected', time: '15 mins ago' },
    { id: 3, text: 'Frontend deployed', time: '1 hour ago' },
  ];
  
  export default function ActivityList() {
    return (
      <div>
        {mockActivity.map((item) => (
          <div key={item.id} className="listItem">
            <div>
              <div style={{ fontWeight: 600 }}>{item.text}</div>
              <div className="small">{item.time}</div>
            </div>
            <span className="badge">event</span>
          </div>
        ))}
      </div>
    );
  }
  