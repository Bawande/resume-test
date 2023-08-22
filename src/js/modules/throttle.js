// - callee, функция, которую надо вызывать;
// - timeout, интервал в мс, с которым следует пропускать вызовы.
const throttle = (callee, timeout) => {
	let timer = null;
	return function perform(...args) {
		if (timer) return;
		timer = setTimeout(() => {
			callee(...args);
			clearTimeout(timer);
			timer = null;
		}, timeout);
	};
};

export default throttle;
