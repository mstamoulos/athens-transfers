package com.developit.athenstransfer.services;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.developit.athenstransfer.model.EmailRequest;

@Service
public class EmailService {
	@Value("#{ systemProperties['user.password'] }")
	String password;
	
	@Value("#{ systemProperties['user.email'] }")
	String email;
	
	
	public void sendEmail(EmailRequest emailRequest) {
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");

		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(email, password);
			}
		});

		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("m.stamoulos@gmail.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("athenstransfervls@gmail.com"));
			message.setSubject("Testing Subject");
			message.setText(emailRequest.toString());

			Transport.send(message);

			System.out.println("Done");

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
	}
}