#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <limits>
#include <vector>

using namespace std;

// Function to check user credentials against a file
bool UserCheckCredentials(const string& username, const string& password) {
    ifstream file("userdetails.csv");

    if (!file.is_open()) {
        cerr << "Error opening the file!" << std::endl;
        return false;
    }

    string line;
    while (getline(file, line)) {
        istringstream iss(line);
        string storedUsername, storedPassword;
		
		// Extract username and password from each line in the file
        if (getline(iss, storedUsername, ',') && getline(iss, storedPassword)) {
            if (storedUsername == username && storedPassword == password) {
                return true;  
        }
    }
 }
    return false;  
}

// Function to check admin credentials against a file
bool AdminCheckCredentials(const string& username, const string& password){
    ifstream file("admindetails.csv");

    if (!file.is_open()) {
        cerr << "Error opening the file!" << std::endl;
        return false;
    }

    string line;
    while (getline(file, line)) {
        istringstream iss(line);
        string storedUsername, storedPassword;
		
		// Extract username and password from each line in the file
        if (getline(iss, storedUsername, ',') && getline(iss, storedPassword)) {
            if (storedUsername == username && storedPassword == password) {
                return true;  
            }
        }
    }

    return false;  
}


// Structure to represent a question
struct Question {
    string text;               // The text of the question
    vector<string> options;    // A vector to store the options for the question
    char correctanswer;        // The correct answer to the question
    char userAnswer;           // The user's chosen answer to the question
};


// Vector to store questions
vector<Question> questionspace;

// Function to read questions from a file
void Questions() {
    ifstream questionFile("testquestions.txt");

    if (questionFile.is_open()) {
        questionspace.clear();

        while (!questionFile.eof()) {
            Question q;
			
			// Read question text
            getline(questionFile, q.text, '?');

            // Read options 
            string option;
            for (int i = 0; i < 4; ++i) {
                getline(questionFile, option, ',');
                q.options.push_back(option);
					
            }
			// Read correct answer
            getline(questionFile, option);
            q.correctanswer = option[1];
                        
            
    		// Store the question in the vector
            questionspace.push_back(q);
        }

        questionFile.close();
    } else {
        cerr << "Error opening the question bank file.\n";
    }
}

// Function to conduct the test
void Test() {
    int correctAnswers = 0;
    vector<size_t> skippedQuestions;

    for (size_t i = 0; i < questionspace.size(); ++i) {
    	// ... (displaying questions, taking user input, checking answers)
        cout << "\nQuestion " << i + 1 << ": " << questionspace[i].text << "?" << endl;
        cout << "Options: ";
        for (const auto& option : questionspace[i].options) {
            cout << option << " ";
        }
        cout << endl;

        do {
            cout << "\nYour Answer (or 's' to skip, 'p' to go to the previous question): ";
            cin >> questionspace[i].userAnswer;

            questionspace[i].userAnswer = toupper(questionspace[i].userAnswer);

            if (!(questionspace[i].userAnswer == 'A' || questionspace[i].userAnswer == 'B' ||
                  questionspace[i].userAnswer == 'C' || questionspace[i].userAnswer == 'D' ||
                  questionspace[i].userAnswer == 'S' || questionspace[i].userAnswer == 'P')) {
                cout << "Please enter a valid answer (A, B, C, D, S, P).\n";
            }
        } while (!(questionspace[i].userAnswer == 'A' || questionspace[i].userAnswer == 'B' ||
                   questionspace[i].userAnswer == 'C' || questionspace[i].userAnswer == 'D' ||
                   questionspace[i].userAnswer == 'S' || questionspace[i].userAnswer == 'P'));

        if (questionspace[i].userAnswer == 'S') {
            skippedQuestions.push_back(i);
            cout << "\nQuestion skipped.\n";
        } else if (questionspace[i].userAnswer == 'P') {
            if (i > 0) {
                cout << "\nGoing to the previous question.\n";
                if (i >= 2) {
                    i = i - 2;
                } else {
                    i = -1;
                }
            } else {
                cout << "You are already at the first question.\n";
            }
        } else {
            if (questionspace[i].userAnswer == questionspace[i].correctanswer) {
                correctAnswers++;
            }
        }
        
        if (i == 9) {  
            char submitChoice;
            cout << "\nYou have completed 10 questions. Do you want to submit? (E to submit, any other key to continue): ";
            cin >> submitChoice;

            if (toupper(submitChoice) == 'E') {
                break;  
            }
            
            for (size_t i : skippedQuestions) {
                cout << "\nGoing back to skipped Question " << i + 1 << ": " << questionspace[i].text << "?" << endl;
                cin >> questionspace[i].userAnswer;

           	    questionspace[i].userAnswer = toupper(questionspace[i].userAnswer);
            }
        }
    }

    cout << "\nYour Score: " << correctAnswers << " out of " << questionspace.size() << "\n";

    char viewScripts;
    cout << "Do you want to view your scripts? (Y/N): ";
    cin >> viewScripts;

    if (toupper(viewScripts) == 'Y') {
        cout << "\nYour Script:\n";
        for (size_t i = 0; i < questionspace.size(); ++i) {
        	// ... (displaying user's answers and correct answers)
            cout << "Question " << i + 1 << ". " << questionspace[i].text << "?\n";
            cout << "Your Answer: " << questionspace[i].userAnswer << ", Correct Answer: " << questionspace[i].correctanswer << "\n";
            if (questionspace[i].userAnswer == questionspace[i].correctanswer) {
                cout << "Right!\n" << endl;
            } else {
                cout << "Wrong!\n" << endl;
            }
        }
    }
}


// Function to register a new student
void registerStudent(){
    ofstream userFile("userdetails.csv",ios::app);

    if (!userFile.is_open()) {
        cerr << "Error opening the user details file." << endl;
        return;
    }

    string username, password;

    cin.ignore();

    cout << "Enter the new student's username: ";
    getline(cin, username);

    cout << "Enter the new student's password: ";
    getline(cin, password);

    userFile << username << "," << password << "\n";

    cout << "Student registered successfully." << endl;

    userFile.close();
}

// Function to register a new admin
void registerAdmin() {
    ofstream userFile("admindetails.csv",ios::app);

    if (!userFile.is_open()) {
        cerr << "Error opening the user details file." << endl;
        return;
    }

    string username, password;

    cin.ignore(); 

    cout << "Enter the new admin's username: ";
    getline(cin, username);

    cout << "Enter the new admin's password: ";
    getline(cin, password);

    userFile << username << "," << password << "\n";

    cout << "Admin registered successfully." << endl;

    userFile.close();
}



int main() {
    string username;
    string password;

    cout << "\t Welcome to Computer Based Testing Application" << endl;

    bool successfulLogin = false;

    while (!successfulLogin) {
        cout << "Enter User Name: ";
        getline(cin, username);

        cout << "Enter Password: ";
        getline(cin, password);

        if (UserCheckCredentials(username, password)) {
        	// ... (user successfully logged in, conduct the test)
            cout << "Successful login!" << endl;
            cout<<"Welcome to the CSC201 C++ Test\n"<<endl;
            Questions();
            Test();

            successfulLogin = true;
        }
		else if(AdminCheckCredentials(username, password)) {
			// ... (admin successfully logged in, provide options to register student or admin)
			cout << "Successful login!" << endl;
			char choice;
			
			cout <<"\nTo upload new questions, add them to the test question .txt file\n";
    		cout << "\nWould you like to register a new student (R) or register a new admin(A)? ";
    		cin >> choice;

    		if (toupper(choice) == 'R') {
        		registerStudent();
    		}else if(toupper(choice) == 'A'){
    			registerAdmin();
			}else {
        	cout << "Invalid choice. Exiting." << endl;
    		}
		}
		else {
			// Invalid credentials
            int Relogin;
            cout << "Invalid username or password.\nWould you like to try again?\n1.Yes\n2.No\n";
            cin >> Relogin;

            if (Relogin != 1) {
                break;
            }
            
            

            cin.ignore(numeric_limits<streamsize>::max(), '\n');
        }
    }

    return 0;
}
