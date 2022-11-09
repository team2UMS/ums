package com.wellsfargo.training.ums.rest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.service.LoginRestService;

@SpringBootTest
@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
public class LoginRestControllerTest {
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private LoginRestService loginService;

	@Test
	public void registerUserSuccessfully() throws Exception {
		User userToPost = createNewUser();
		String exampleJSON = "{\n"
				+ "    \"contactNumber\" : \"2343454564565\","
				+ "    \"firstName\" : \"D\","
				+ "    \"lastName\" : \"D\","
				+ "    \"city\" : \"Hyd\","
				+ "    \"occupation\" : \"Worker\","
				+ "    \"password\" : \"android1234\","
				+ "    \"dob\" : \"2000-05-26\","
				+ "    \"branch\" : \"Hyd\""
				+ "}";
		String expectedOutput = "{"
				+ "\"data\":1,"
				+ "\"message\":\"Registered\","
				+ "\"status\":200"
				+ "}";
		// studentService.addCourse to respond back with mockCourse
		Mockito.when(loginService.registerUser(
				Mockito.any(User.class))).thenReturn(userToPost);

		// Send course as body to /students/Student1/courses
		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.post("/api/register")
				.accept(MediaType.APPLICATION_JSON).content(exampleJSON)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(200, response.getStatus());
		assertEquals(expectedOutput, response.getContentAsString());

	}
	
	
	@Test
	public void loginUser() throws Exception {
		String exampleJSON = "{\n"
				+ "    \"contactNumber\" : \"93114382\",\n"
				+ "    \"password\" : \"android1234\"   \n"
				+ "}";
		
		Mockito.when(loginService.registerUser(
				Mockito.any(User.class))).thenReturn(createNewUser());
		
		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.post("/api/login")
				.accept(MediaType.APPLICATION_JSON).content(exampleJSON)
				.contentType(MediaType.APPLICATION_JSON);
		
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(409, response.getStatus());
		
		
	}

	public User createNewUser() {
		User userToPost = new User();
		userToPost.setCustomerId(1);
		userToPost.setContactNumber("978654121");
		userToPost.setFirstName("Hinata");
		userToPost.setLastName("Shoyo");
		userToPost.setBranch("Tokyo");
		userToPost.setCity("Tokyo");
		userToPost.setOccupation("Athlete");
		LocalDate localDate = LocalDate.of(1996, 06, 21);
		Date userBirthDay = Date.valueOf(localDate);
		userToPost.setDob(userBirthDay);
		userToPost.setPassword("LittleGiant001");
		return userToPost;
	}


}
