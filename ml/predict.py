import joblib
import sys

model = joblib.load("model/ticket_classifier.pkl")
text = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "login failed"
prediction = model.predict([text])[0]
print(prediction)
