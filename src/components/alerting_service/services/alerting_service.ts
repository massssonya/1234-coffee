import { Observable, Subject } from "rxjs";

import { IAlert } from "@my_types/alert";
import { TColors } from "@my_types/colors";

const alertsSubject = new Subject<IAlert>();
const closedAlertsSubject = new Subject<number>();

const success = (message: string, timeout = 0): void => {
	alert("success", message, timeout);
};

const error = (message: string, timeout = 0): void => {
	alert("error", message, timeout);
};

const warning = (message: string, timeout = 0): void => {
	alert("warning", message, timeout);
};

const info = (message: string, timeout = 0): void => {
	alert("info", message, timeout);
};

const alert = (status: TColors, message: string, timeout: number): void => {
	alertsSubject.next({
		id: Math.round(window.performance.now() * 10),
		status,
		message,
		timeout
	});
};

const onAlert = (): Observable<IAlert> => {
	return alertsSubject.asObservable();
};

const close = (id: number): void => {
	closedAlertsSubject.next(id);
};

const onClosed = (): Observable<number> => {
	return closedAlertsSubject.asObservable();
};

export { success, warning, error, info, onAlert, close, onClosed };
