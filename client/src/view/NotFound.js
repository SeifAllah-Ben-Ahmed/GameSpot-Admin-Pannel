const NotFound = () => {
  return (
    <main className="card bg-danger">
      <div
        style={{ minHeight: 'calc(100vh - 140px)' }}
        className="card-body  d-flex flex-column justify-content-center"
      >
        <h2 className="text-center text-danger">⚒⚒🛠⛏</h2>
        <h1 className="text-center text-light">
          Page not found <strong>404</strong>
        </h1>
        <h2 className="text-center text-danger">⚒⚒🛠⛏</h2>
      </div>
    </main>
  );
};

export default NotFound;
