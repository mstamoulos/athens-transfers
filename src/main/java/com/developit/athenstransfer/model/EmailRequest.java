package com.developit.athenstransfer.model;

public class EmailRequest {
	public String name;
	public String surname;
	public String from;
	public String to;
	@Override
	public String toString() {
		return "EmailRequest [name=" + name + ", surname=" + surname + ", from=" + from + ", to=" + to + ", date=" + date + "]";
	}

	public String date;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

}
