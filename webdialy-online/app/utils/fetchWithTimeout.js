export default function(url, options, timeout = 20) {
    const controller = new AbortController();
    const { signal } = controller;
    return Promise.race([
      fetch(url, { ...options, signal }),
      new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error('timeout'));
          setTimeout(() => controller.abort(), 200);
        }, timeout * 1000)
      ),
    ]);
  }
  